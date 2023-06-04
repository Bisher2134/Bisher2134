import "/src/App.css";  
function Modal({children})
{ 
    return (
    <main className = "modal">
      <dialog open className="dialog">{children}</dialog>
    </main>
    ) ; 
}

export default Modal ; 