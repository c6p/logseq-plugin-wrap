export default function Toolbar({ items, model }) {
  function triggerAction(e, key) {
    e.preventDefault()
    e.stopPropagation()
    if (e.button !== 0) return
    model[key]()
  }

  return items.map(({ key, label, icon }) => (
    <div
      key={key}
      className="kef-wrap-tb-item"
      onMouseDown={(e) => triggerAction(e, key)}
      title={label}
    >
      {icon ? (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
          alt={label}
        />
      ) : (
        "X"
      )}
    </div>
  ))
}
