//import "./banner.css"

export default function Banner() {
    return (
        <section className="topinho" id="sobre">
            <div className="topinho-conteudo">
                <h1>Personagens Favs</h1>
                <p>
                Exemplo se sitezinhno com meus personagens favoritos, just for fun, vocês vão poder cololcar o que quiser, mas lembrem que é só um exercicio sz'
                </p>
                <div className="topinho-botoes">
                    <a className="btn btn-primary" href="#cat_btn">Categorias</a>
                </div>
            </div>

            <article className="topinho-card">
                <div className="top-cardzinho">
                    <hgroup>
                        <h2 className="cardzinho-titulo">Destaque do day</h2>
                        <p className="cardzinho-text"></p>
                    </hgroup>
                    
                    <figure className="cardzinho-img">
                        <img src="" alt="personagem"/>
                    </figure>
                </div>
            </article>
        </section>
    );
}