from os import system
import numpy as np
import time
import random

def llenarMatriz():
    matriz_temp = np.zeros((6, 6))
    for i in range(6):
        for j in range(6):
            num_aleatorio = random.randint(1, 101)
            matriz_temp[i, j] = num_aleatorio
    return matriz_temp

def checkNumAleatorio(vector_temp, num_temp):
    if num_temp in vector_temp:
        return True
    else:
        return False

def checkBingo(matriz_temp):
    diagonal = np.diag(matriz_temp)
    diagonal_secundaria = np.diag(np.fliplr(matriz_temp))
    if np.sum(diagonal) == 0:
        return True
    elif np.sum(diagonal_secundaria) == 0:
        return True
    else:
        for i in range(6):
            if np.sum(matriz_temp[i, :]) == 0:
                return True
            elif np.sum(matriz_temp[:, i]) == 0:
                return True
            else:
                return False

vector_resultados = np.array([])

matriz_aleatorios = llenarMatriz()

matriz_clone = matriz_aleatorios.copy()

print('Tú carton de juego: \n\n', matriz_aleatorios, '\n\n', 'Fichas encontradas: \n\n', matriz_clone) 

for i in range(40):
    num_aleatorio = random.randint(1, 101)
    while checkNumAleatorio(vector_resultados, num_aleatorio):
        num_aleatorio = random.randint(1, 101)
    indices = np.where(matriz_clone == num_aleatorio)
    matriz_clone[indices] = 0
    #time.sleep(1)
    system('clear')
    print('\n\nNumero: ', num_aleatorio,'\n\nFichas encontradas: \n\n', matriz_clone)
    

print('Tú carton de juego: \n\n', matriz_aleatorios, '\n\n', 'Fichas encontradas: \n\n', matriz_clone) 


