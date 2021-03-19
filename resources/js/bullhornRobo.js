const socket = io(config.socketURL, {
  secure: config.secure,
  reconnect: true,
  rejectUnauthorized: false,
  transports: ['websocket', 'polling']
});

let popUpWindow;

function initializeBullHornOAuth() {
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=-1000,top=-1000`;
  popUpWindow = window.open(`https://auth.bullhornstaffing.com/oauth/authorize?client_id=${config.bullhorn.client_id}&response_type=code&state=${socket.id}&redirect_uri=${config.bullhorn.redirect_uri}`, 'BullHorn', params);
}

let bullHornAccessToken = "";
let bullHornRestToken = "";
let bullHornRestURL = "";
let successfulInit = false;
const APICallEnum = {
  GETALLTEARSHEETS: "getAllTearSheets",
  SENDTOBULLHORN: "sendToBullHorn",
  GETENTITYINFO: "getEntityInfo"
};
let currentAPICallStuck = "";
let paramCallback = null;

socket.on('connect', (...arguments) => {
  console.log(`connect`, arguments);
  //initializeBullHornOAuth();
});

socket.on('connecting', (...arguments) => {
  console.log(`connecting`, arguments);
});

socket.on('disconnect', (...arguments) => {
  console.log(`disconnect`, arguments);
});

socket.on('reconnect', (...arguments) => {
  console.log(`reconnect`, arguments);
});

socket.on('error', (...arguments) => {
  console.log(`error`, arguments);
});

socket.on('connect_failed', (...arguments) => {
  console.log(`connect_failed`, arguments);
});

socket.on('reconnect_failed', (...arguments) => {
  console.log(`reconnect_failed`, arguments);
});

socket.on('bullhorn-launch-campaign', (data) => {
  console.log(data);
  // $(".rectangle").hide();
  // $("#bullhorn-form").show();

  if (typeof data === "string" && !data.length)
    data = "{}";
  data = typeof data === "string" ? JSON.parse(data) : data;
  if (data.isErr) {
    bullHornAccessToken = null;
    bullHornRestToken = null;
    bullHornRestURL = null;
    currentAPICallStuck = APICallEnum.SENDTOBULLHORN;
    return initializeBullHornOAuth();
  }

  changeButtonStatus(false);

  if (data && data.errorMsg && data.errorMsg.length) {
    showAlerts("alert-danger", data.errorMsg);
  } else {
    if (data && data.newCandidates !== null && data.newCandidates !== undefined && data.newCandidates > 0)
      showAlerts("alert-success", `Campaign has been launched to the selected hotlist.`);
    else if (data && data.newCandidates !== null && data.newCandidates !== undefined && data.newCandidates == 0)
      showAlerts("alert-danger", `No new contacts found. Please add new contacts or select a new hotlist.`);
    else
      showAlerts("alert-danger", `Oops, something went wrong, there maybe a configuration issue.`);
  }

});

socket.on('bullhorn-auth', (response) => {
  const isAuthErr = response.isErr;
  const errorMsg = response.msg;

  if (isAuthErr) {
    showAlerts("alert-danger", `BullHorn Authorization failed. Please try again in sometime. `);
    setTimeout(initializeBullHornOAuth, 1 * 1000);
    //return error message and do not proceed
  } else {

    const bullhornAuth = response.bullhornAuth;
    bullHornAccessToken = bullhornAuth.access_token;
    if (!successfulInit) initBullhorn();
    else {
      switch (currentAPICallStuck) {
        case APICallEnum.GETALLTEARSHEETS :
          getAllTearSheets();
          break;
        case APICallEnum.SENDTOBULLHORN :
          sendToBullHorn();
          break;
        case APICallEnum.GETENTITYINFO :
          getEntityInfo(paramCallback);
          break;
        default:
          initBullhorn();
      }
    }
    successfulInit = true;
    popUpWindow.close();

  }
})

let entityBrandingTemplate,
  entityConversationId,
  entityHotListIds;
let isConversationListReady = false;
const TearSheetList = {};

let isHotListReady = false;

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));

  const sURLVariables = sPageURL.split('&');

  let sParameterName;

  let i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      if (sParameterName.length < 3) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
      return sURLVariables[i].replace(`${sParameterName[0]}=`, "");
    }
  }
}

function setDefaultItems() {
  if (isConversationListReady
    && isHotListReady
    && (entityBrandingTemplate !== null && entityBrandingTemplate !== undefined)
    && (entityConversationId !== null && entityConversationId !== undefined)
    && (entityHotListIds !== null && entityHotListIds !== undefined)) {
    if (entityConversationId && entityConversationId.toString().length) {
      $("#conversation_to_use").selectpicker('val', parseInt(entityConversationId, 10));
    }
    if (entityHotListIds && entityHotListIds.toString().length) {
      $("#hotlist").selectpicker('val', (typeof entityHotListIds === "string") ? entityHotListIds.split(",") : entityHotListIds);
    }
    if (entityBrandingTemplate && entityBrandingTemplate.toString().length) {
      $("#branding_template").selectpicker('val', entityBrandingTemplate);
    }
    $(".loader").hide();
    $(".main-content").show();
  } else {
    setTimeout(setDefaultItems, 500);
  }
}

function showAlerts(messageAlert, messageText) {
  const alertBox = `<div class="alert ${messageAlert} alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>${messageText}</div>`;
  $('#bullhorn-form').find('.messages').html(alertBox);
}

const PredefinedConversationList = ["job notification script"];

function getAllModules() {
  $.ajax({
    url: `${config.APIURL}NES/module`,
    success(conversationsData) {
      conversationsData = typeof conversationsData === "string" ? JSON.parse(conversationsData) : conversationsData;
      let conversationsHTML = '';
      let isEUServer = (location.hostname === "eu.botrecruiter.com");
      if (conversationsData && conversationsData.data && conversationsData.data.length) {
        conversationsData.data.forEach((conversation) => {
          if (isEUServer) {
            if (PredefinedConversationList.indexOf(conversation.name.toLowerCase().trim()) === -1)
              return;
          }
          let content = conversation.name;
          if (content.length > 87) content = `${content.substring(0, 87)}...`;
          conversationsHTML += `<option value="${conversation.moduleid}" data-content="${content}">${conversation.name}</option>`;
        });
      }
      $("#conversation_to_use").selectpicker('destroy');
      $("#conversation_to_use").html(conversationsHTML);
      $("#conversation_to_use").selectpicker({size: 3, virtualScroll: false});
      isConversationListReady = true;
    },
    error(...arguments) {
      console.error("ERRORED", arguments);
    }
  });
}

function getAllTearSheets() {
  $.ajax({
    url: `${config.APIURL}bullhorn/tearsheets?access_token=${bullHornAccessToken || ""}&rest_token=${bullHornRestToken || ""}&rest_url=${bullHornRestURL || ""}`,
    success(tearSheetsData) {
      if (typeof tearSheetsData === "string" && !tearSheetsData.length)
        tearSheetsData = "{}";
      tearSheetsData = typeof tearSheetsData === "string" ? JSON.parse(tearSheetsData) : tearSheetsData;
      if (tearSheetsData.isErr) {
        bullHornAccessToken = null;
        bullHornRestToken = null;
        bullHornRestURL = null;
        currentAPICallStuck = APICallEnum.GETALLTEARSHEETS;
        return initializeBullHornOAuth();
      }
      bullHornRestToken = tearSheetsData.bullHornRestToken ? tearSheetsData.bullHornRestToken : null;
      bullHornRestURL = tearSheetsData.bullHornRestURL ? tearSheetsData.bullHornRestURL : null;
      let tearSheetsHTML = '';
      let privateTearSheetsHTML = '';
      let publicTearSheetsHTML = '';
      if (tearSheetsData && tearSheetsData.data) {
        tearSheetsData.data.forEach((tearSheet) => {
          TearSheetList[tearSheet.name] = tearSheet.id;
          const owner = tearSheet.owner;
          const ownerName = `${owner.firstName || ''} ${owner.lastName || ''}`;
          const optionHtml = `<option value="${tearSheet.name}" tearSheetId="${tearSheet.id}" data-subtext="${ownerName.trim()}">${tearSheet.name}</option>`;
          if (tearSheet.isPrivate) {
            privateTearSheetsHTML += optionHtml;
          } else {
            publicTearSheetsHTML += optionHtml;
          }
        });
        if (privateTearSheetsHTML.length) {
          privateTearSheetsHTML += `<option data-divider="true"></option>`;
        }
        tearSheetsHTML = privateTearSheetsHTML + publicTearSheetsHTML;
      }
      $("#hotlist").selectpicker('destroy');
      $("#hotlist").html(tearSheetsHTML);
      $("#hotlist").selectpicker({size: 3, virtualScroll: false});
      isHotListReady = true;
    },
    error(...arguments) {
      console.error("ERRORED", arguments);
    }
  });
}


function getEntityInfo(callback) {
  const EntityID = 186;
  $.ajax({
    type: `GET`,
    url: `${config.APIURL}bullhorn/entity/vacancy/${EntityID}?access_token=${bullHornAccessToken || ""}&rest_token=${bullHornRestToken || ""}&rest_url=${bullHornRestURL || ""}`,
    success(entityInfoData) {

      if (typeof entityInfoData === "string" && !entityInfoData.length)
        entityInfoData = "{}";
      entityInfoData = typeof entityInfoData === "string" ? JSON.parse(entityInfoData) : entityInfoData;
      if (entityInfoData.isErr) {
        bullHornAccessToken = null;
        bullHornRestToken = null;
        bullHornRestURL = null;
        paramCallback = callback;
        currentAPICallStuck = APICallEnum.GETENTITYINFO;
        return initializeBullHornOAuth();
      }

      bullHornRestToken = entityInfoData.bullHornRestToken ? entityInfoData.bullHornRestToken : null;
      bullHornRestURL = entityInfoData.bullHornRestURL ? entityInfoData.bullHornRestURL : null;
      entityBrandingTemplate = entityInfoData.data.customText1 || "";
      entityConversationId = entityInfoData.data.customText7 || "";
      entityHotListIds = entityInfoData.data.customText18 || "";

      if (callback) callback((entityInfoData && entityInfoData.data) ? entityInfoData.data : {});
    },
    error(...arguments) {
      console.error("ERRORED", arguments);
    }
  });
}

function sendToBullHorn() {
  const EntityID = 186;
  const brandingTemplate = $("#branding_template").val();
  if (!brandingTemplate || !brandingTemplate.length) {
    return showAlerts("alert-danger", `Please select a branding template.`);
  }

  const conversationId = $("#conversation_to_use").val();
  if (!conversationId || !conversationId.length) {
    return showAlerts("alert-danger", `Please select a conversation.`);
  }

  let hotListIds = $("#hotlist").val();
  if (!hotListIds || !hotListIds.length) {
    return showAlerts("alert-danger", `Please select a hotlist to launch the chatbot.`);
  }

  let hotListIdList = [];
  hotListIds.forEach(hotList => {
    if (TearSheetList[hotList])
      hotListIdList.push(TearSheetList[hotList]);
  });

  if (typeof hotListIds !== "string") hotListIds = hotListIds.join(",");

  showAlerts("alert-warning", `Validating candidates... please wait.`);
  $.ajax({
    type: `POST`,
    headers: {
      'Content-Type': "application/x-www-form-urlencoded"
    },
    timeout: 10 * 60 * 1000, // 10 minutes (maybe increase time in future)
    url: `${config.APIURL}bullhorn/entity/vacancy/${EntityID}?access_token=${bullHornAccessToken || ""}&rest_token=${bullHornRestToken || ""}&rest_url=${bullHornRestURL || ""}`,
    data: {
      brandingTemplate,
      conversationId,
      hotListIds,
      hotListIdList,
      socketId: socket.id
    },
    success(data) {

      // $(".rectangle").show();
      // $("#bullhorn-form").hide();

      // if (typeof data === "string" && !data.length)
      //   data = "{}";
      // data = typeof data === "string" ? JSON.parse(data) : data;
      // if (data.isErr) {
      //   bullHornAccessToken = null;
      //   bullHornRestToken = null;
      //   bullHornRestURL = null;
      //   currentAPICallStuck = APICallEnum.SENDTOBULLHORN;
      //   return initializeBullHornOAuth();
      // }
      //
      // changeButtonStatus(false);
      //
      // if (data && data.errorMsg && data.errorMsg.length) {
      //   showAlerts("alert-danger", data.errorMsg);
      // } else {
      //   if (data && data.newCandidates !== null && data.newCandidates !== undefined && data.newCandidates > 0)
      //     showAlerts("alert-success", `Campaign has been launched to the selected hotlist.`);
      //   else if (data && data.newCandidates !== null && data.newCandidates !== undefined && data.newCandidates == 0)
      //     showAlerts("alert-danger", `No new contacts found. Please add new contacts or select a new hotlist.`);
      //   else
      //     showAlerts("alert-danger", `Oops, something went wrong, there maybe a configuration issue.`);
      // }

    },
    error(xhr) {
      console.error("RoboRecruiter Error", xhr);
      changeButtonStatus(false);
      showAlerts("alert-success", `Campaign is taking time to launch. Please sit back and relax`);
      // $(".rectangle").hide();
      // $("#bullhorn-form").show();
      // if (xhr && xhr.status && xhr.status === 0) {
      // }
    }
  });
}

function validateJobStatus(callback) {
  return getEntityInfo((entityInfoData) => {
    if (entityInfoData
      && entityInfoData.status
      && entityInfoData.status.length
      && entityInfoData.status.toLowerCase().trim() !== "accepting candidates") {
      return callback(`Status of vacancy must be "Accepting Candidates".`);
    }

    if (entityInfoData
      && entityInfoData.isOpen !== undefined
      && entityInfoData.isOpen !== null
      && entityInfoData.isOpen !== true) {
      return callback(`Status of vacancy must be "Open".`);
    }

    return callback();
  });
}

function changeButtonStatus(disable) {
  if (disable) {
    $('.btn-preview').attr('disabled', 'disabled');
    $('.btn-save').attr('disabled', 'disabled');
  } else {
    $('.btn-preview').removeAttr('disabled');
    $('.btn-save').removeAttr('disabled');
  }
}

function onClickPreview() {
  const brandingTemplate = $("#branding_template").val();
  if (!brandingTemplate || !brandingTemplate.length) {
    return showAlerts("alert-danger", `Please select a branding template.`);
  }

  const conversationId = $("#conversation_to_use").val();
  if (!conversationId || !conversationId.length) {
    return showAlerts("alert-danger", `Please select a conversation.`);
  }

  changeButtonStatus(true);
  validateJobStatus((err) => {
    if (err) {
      changeButtonStatus(false);
      return showAlerts("alert-danger", err);
    }

    // do preview
    const EntityID =186;
    window.open(`${config.WEBUIURL}nes_job.html?BrandingTemplate=${brandingTemplate}&EntityID=${EntityID}&moduleId=${conversationId}&rest_token=${bullHornRestToken || ""}&rest_url=${bullHornRestURL || ""}`);
    return changeButtonStatus(false);
  });
}

function onClickSave() {
  const brandingTemplate = $("#branding_template").val();
  if (!brandingTemplate || !brandingTemplate.length) {
    return showAlerts("alert-danger", `Please select a branding template.`);
  }

  const conversationId = $("#conversation_to_use").val();
  if (!conversationId || !conversationId.length) {
    return showAlerts("alert-danger", `Please select a conversation.`);
  }

  const hotListIds = $("#hotlist").val();
  if (!hotListIds || !hotListIds.length) {
    return showAlerts("alert-danger", `Please select a hotlist to launch the chatbot.`);
  }

  showAlerts("alert-warning", `Campaign is being launched... Please wait.`);
  changeButtonStatus(true);

  return validateJobStatus((err) => {
    if (err) {
      changeButtonStatus(false);
      return showAlerts("alert-danger", err);
    }

    return sendToBullHorn();
  });
}

function initBullhorn(bullHornAccessToken) {
  getEntityInfo(() => {
    getAllTearSheets();
  });
  getAllModules();
  $("#branding_template").selectpicker('val', 'NES Fircroft');
  $('.btn-preview').on('click', onClickPreview);
  $('.btn-save').on('click', onClickSave);
  setTimeout(setDefaultItems, 500);
}

function socketIdTimer() {
  if (!socket.id) {
    setTimeout(socketIdTimer, 200);
  } else {
    initializeBullHornOAuth();
  }
}

$(document).ready(() => {
  //initBullhorn();
  //initializeBullHornOAuth();
  socketIdTimer();
});
