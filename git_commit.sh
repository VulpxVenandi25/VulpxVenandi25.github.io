#!/bin/bash

# Script: git-commit.sh
# Descripción: Automatiza el proceso de commit y push a GitHub

# Colores para mensajes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verifica si el directorio actual es un repositorio git
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo -e "${RED}Error: Este directorio no es un repositorio git.${NC}"
    exit 1
fi

# Obtiene el estado del repositorio
git status

# Pide al usuario el mensaje del commit
echo -e "${YELLOW}Introduce el mensaje para el commit:${NC}"
read commit_message

# Si no se introduce mensaje, usa uno por defecto
if [ -z "$commit_message" ]; then
    commit_message="Commit automático $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "${YELLOW}Usando mensaje por defecto: $commit_message${NC}"
fi

# Ejecuta los comandos git
git add .
git commit -m "$commit_message"

# Pregunta si hacer push
echo -e "${YELLOW}¿Quieres hacer push al repositorio remoto? [y/n]${NC}"
read do_push

if [ "$do_push" = "y" ] || [ "$do_push" = "Y" ]; then
    # Obtiene la rama actual
    current_branch=$(git symbolic-ref --short HEAD)
    
    echo -e "${GREEN}Haciendo push a la rama $current_branch...${NC}"
    git push origin "$current_branch"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Push completado con éxito.${NC}"
    else
        echo -e "${RED}Error al hacer push. Verifica tu conexión o configuración.${NC}"
    fi
else
    echo -e "${YELLOW}Commit realizado localmente (sin push).${NC}"
fi