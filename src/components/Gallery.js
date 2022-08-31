import { annonceList } from "../data/annonceList";
function Gallery(props) {
  const annonceName = [];
  const annonceCover = [];
  annonceList.forEach((annonce) => {
    annonceName.push(annonce.title);
    annonceCover.push(annonce.cover);
  });
  console.log(annonceName);
  console.log(annonceCover);
  return (
    <div className="gallery">
      {annonceList.map((annonce) => (
        <div className="imgCover" key={annonce.id}>
          <img src={annonce.cover} alt="" />
          <div className="title" key={annonce.id}>
            {annonce.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
