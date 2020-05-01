class Notificador {
    notificarAgora(post: Post) {
        console.log('-> Notificando usuarios!');
    }
}

interface INotificador {
    notificarAgora(post: Post); 
}

class Post {
    
    constructor(public titulo: string, private notificador: INotificador) {
        console.log('-> Novo Post: ' + titulo);
    }

    publicar() {
        console.log('-> Publicando Post!');
        this.notificador.notificarAgora(this);
    }
}



let novoPost = new Post('Aprendendo Injecao de Dep!', new Notificador());
novoPost.publicar();
