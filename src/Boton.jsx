function Boton({ children, manejarEvento}){
    const ejecutar = (children === '=' || children === 'Clear') ? manejarEvento : ()=>manejarEvento(children)
    const esOperador = (valor)=> isNaN(valor) && valor!=='.' && valor!=='=';
    return(
        <button 
            className={`btn-${children==='Clear'? 'clear' : esOperador(children)? 'operator' : 'center'}`} 
            onClick={ejecutar}>
            {children}
        </button>
    );
}

export { Boton }