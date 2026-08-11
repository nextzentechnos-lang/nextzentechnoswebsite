@echo off
title NextZen Technos Launcher
echo ===================================================
echo   Launching NextZen Technos Dev Server ^& Browser
echo ===================================================
echo.

:: Start Vite dev server in a new console window
echo [1/3] Starting Vite development server...
start cmd /k "npm run dev"

:: Wait for Vite to initialize (3 seconds)
echo [2/3] Waiting for server to initialize...
timeout /t 3 /nobreak >nul

:: Open localhost URL in default browser
echo [3/3] Launching browser to http://localhost:5173...
start http://localhost:5173/

echo.
echo ===================================================
echo   Done! You can close this window.
echo   Keep the other command window open to keep the
echo   server running.
echo ===================================================
timeout /t 5
