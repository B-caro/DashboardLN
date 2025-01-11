import numpy as np
import random
import time 

def llenarMatriz():
    matrizTemp = np.zeros((6,6), dtype=int)
    numeros_disponibles = list(range(1, 101))
    for i in range(6):
        for j in range(6):
            if numeros_disponibles:
                numAletorio = random.choice(numeros_disponibles)
                matrizTemp[i, j] = numAletorio
                numeros_disponibles.remove(numAletorio)
    return matrizTemp

def jugarBingo():
    matrizBingo = llenarMatriz()
    matrizClone = matrizBingo.copy()
    print("Tú carton de Bingo es: \n", matrizBingo)

jugarBingo()