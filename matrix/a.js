function determinant(mat) {
  // Verifica se a matriz é quadrada
  const n = mat.length;
  if (n !== mat[0].length) {
    console.log("Erro: a matriz não é quadrada");
    return 0;
  }

  // Caso base: matriz 1x1
  if (n === 1) {
    return mat[0][0];
  }

  // Caso base: matriz 2x2
  if (n === 2) {
    return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
  }

  // Cálculo do determinante por cofatores
  let det = 0;
  for (let i = 0; i < n; i++) {
    // Cria a matriz cofatora
    const cofactor = new Array(n-1).fill().map(() => new Array(n-1));
    for (let j = 1; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (k < i) {
          cofactor[j-1][k] = mat[j][k];
        }
        else if (k > i) {
          cofactor[j-1][k-1] = mat[j][k];
        }
      }
    }
    // Calcula o cofator e o adiciona ao determinante
    const cof = ((i % 2 === 0) ? 1 : -1) * mat[0][i] * determinant(cofactor);
    det += cof;
  }

  return det;
}

// Exemplo de uso
const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const det = determinant(mat);
console.log("Determinante da matriz: " + det);
