@echo off
title GATE Quiz Generator Server
echo.
echo   Starting GATE Quiz Generator...
echo.
start "" http://localhost:3000/index.html
node "%~dp0server.js"
