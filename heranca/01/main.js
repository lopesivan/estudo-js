class Mamifero {
    falar() {
        throw new Error('Método abstrato não implementado!');
    }
}

class Cachorro extends Mamifero {
    falar() {
        console.log('Au Au');
    }
}

class Gato extends Mamifero {
    falar() {
        console.log('Miau');
    }
}


const gato = new Gato();
const cachorro = new Cachorro();

gato.falar();     // Saída: Miau
cachorro.falar(); // Saída: Au Au
