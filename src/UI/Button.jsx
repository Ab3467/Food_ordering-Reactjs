

export default function Button({children, textOnly , }) {

    const cssClasses = textOnly ? "text-button" : "button";
  return (
    <button>
      {children}
    </button>
  )
}

