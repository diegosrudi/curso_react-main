function Evento({numero}) {

    function meuEvento() {
        console.log('Clicou! ${numero}')
    }


    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onclick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;