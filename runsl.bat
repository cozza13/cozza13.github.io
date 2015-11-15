: This script will launch Second Life.


: When SL is closed, it will delete temp directories that cause PSU Lab problems.


: For this script to work, the folder containing the Second Life application


: (SecondLife) must be in the same directory as this script. 



@ECHO OFF


ECHO Please leave this window open.


ECHO IGNORE ANY "Profile Storage Space" MESSAGES YOU SEE!


ECHO Now launching Second Life...


ECHO. PAUSE CD /d %~dp0 CD Snowglobe


START /wait CommunityDeveloper.exe --channel "CommunityDeveloper"  --settings settings_communitydeveloper.xml --set InstallLanguage en

RMDIR /q /s "%APPDATA%\SecondLife"


ECHO.


ECHO Second Life is closing. Now cleaning up your temp files...


ECHO.


PAUSE


CLS


EXIT