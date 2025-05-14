@echo off
echo =====================================
echo 1. Compilando Angular para producción
echo =====================================
cd front\frontend
call npm install
call npm run build --configuration production
cd ..\..

echo =====================================
echo 2. Copiando build a carpeta nginx
echo =====================================
rmdir /S /Q nginx\frontend
xcopy /E /I /Y front\frontend\dist\frontend nginx\frontend

echo =====================================
echo 3. Levantando Docker Compose
echo =====================================
docker-compose down -v
docker-compose up --build
