const ItemListContainer = ({ saludo, edad, x }) => {
  return (
    <div>
      <h4>Hola, {saludo} cómo estás?</h4>
      <h5>Mi edad es {edad} anios</h5>
    </div>
  );
};

export default ItemListContainer;
