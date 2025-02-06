import React, { useState } from 'react';

const TemoignagesPage = () => {
  const [newTemoignage, setNewTemoignage] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [temoignages, setTemoignages] = useState([
    { id: 7, text: "« La visite du chien me rappelle la maison, où j’ai toujours eu des chiens. Sa présence me réconforte, m’apaise ou m’égaye selon les jours».", author: "Naty V.", role: "Patiente à l’Hôpital Broca" },
    { id: 8, text: "« Les activités avec le chien permettent un contact affectif et une stimulation physique et mémorielle. Certaines personnes qui ont eu des animaux retrouvent des souvenirs grâce au chien »", author: "Tony P.", role: "Animateur à La Maison des Parents" },
    { id: 9, text: "« Parole de Chien, c’est l’animation qui a le plus de succès. Nous avons dû créer 2 groupes tant les participants étaient nombreux! »", author: "Stéphane L.", role: "Animateur à la Maison St Jean de Malte" },
    { id: 1, text: "« Il se passe beaucoup de choses au contact du chien. Durant les visites, on voit des personnes complètement fermées – certaines ne parlent pas habituellement – se mettre à sourire et s’exprimer en voyant ou en touchant le chien ».", author: "Claire H.", role: "Responsable animation à Hôpital Broca" },
    { id: 2, text: "« Les chiens, c’est bien agréable de les retrouver, de les regarder, de les caresser. En plus, ils ne font pas de distinction entre les vieilles dames et les jeunes de 20 ans. Ça me rajeunit! »", author: "Paulette M.", role: "Patiente à l’Hôpital Broca" },
    { id: 3, text: "« Ces chiens améliorent la qualité de vie et le bonheur d’être au quotidien de nos patients; c’est déjà une thérapeutique en soi! »", author: "Professeur Françoise Forette", role: "Présidente de la Fondation Nationale de Gérontologie" },
    { id: 4, text: "« Quand la famille ou les amis viennent me voir, je leur parle toujours des chiens qui me rendent visite le jeudi! »", author: "Léa B.", role: "Patiente à l’Hôpital Broca" },
    { id: 5, text: "« Ces chiens sont des médiateurs hors-pair qui nous aident à rentrer en communication avec certaines personnes alors que seuls nous n’y sommes pas parvenus ».", author: "Christian T.", role: "Animateur à l’Hôpital Broussais" },
    { id: 6, text: "« Tout le monde a besoin d’être touché. Ces chiens apportent aux patients ce toucher que nous n’avons plus le temps, nous soignants, de leur apporter ».", author: "Dominique L.B", role: "Cadre infirmier à l’Hôpital Broca" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTemoignage && newAuthor && newRole) {
      setTemoignages([
        ...temoignages,
        {
          id: temoignages.length + 1,
          text: newTemoignage,
          author: newAuthor,
          role: newRole,
        },
      ]);
      setNewTemoignage('');
      setNewAuthor('');
      setNewRole('');
    }
  };

  return (
    <div className="temoignages-page p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Ajoutez Votre Témoignage</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {temoignages.map((temoignage) => (
          <div key={temoignage.id} className="temoignage-card p-4 border rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">{temoignage.text}</p>
            <p className="font-semibold text-right">- {temoignage.author}, {temoignage.role}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">Ajoutez Votre Témoignage</h3>
      <form onSubmit={handleSubmit} className="bg-white p-4 border rounded-lg shadow-md">
        <textarea
          value={newTemoignage}
          onChange={(e) => setNewTemoignage(e.target.value)}
          placeholder="Écrivez votre témoignage ici"
          rows="4"
          className="w-full p-3 border rounded-md mb-4"
          required
        ></textarea>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Votre nom"
          className="w-full p-3 border rounded-md mb-4"
          required
        />
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Votre fonction (ex: animateur, patient...)"
          className="w-full p-3 border rounded-md mb-4"
          required
        />
        <button
          type="submit"
          className="bg-[rgb(212,93,0)] text-white py-3 px-8 rounded-full transition duration-300 
          shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.7)] 
          hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),_-4px_-4px_8px_rgba(255,255,255,0.6)] 
          active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.6)] 
          hover:bg-[rgba(212,100,10,1)]"
        >
          Ajouter un Témoignage
        </button>
      </form>
    </div>
  );
};

export default TemoignagesPage;
