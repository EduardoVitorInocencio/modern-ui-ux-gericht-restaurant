import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// Importa componentes e constantes reutilizáveis, além de estilos específicos para a galeria
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

// Define o componente Gallery
const Gallery = () => {
  // Cria uma referência para o contêiner de imagens, permitindo manipular o scroll horizontalmente
  const scrollRef = React.useRef(null);

  // Função que realiza o scroll na direção especificada ('left' ou 'right')
  const scroll = (direction) => {
    const { current } = scrollRef;

    // Move o contêiner para a esquerda ou para a direita em 300px
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Retorno do JSX que renderiza a galeria
  return (
    <div className="app__gallery flex__center">
      {/* Seção com o conteúdo textual da galeria */}
      <div className="app__gallery-content">
        {/* Subtítulo reutilizável importado */}
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        {/* Botão que poderia abrir uma visualização mais detalhada da galeria */}
        <button type="button" className="custom__button">View More</button>
      </div>

      {/* Seção contendo as imagens da galeria */}
      <div className="app__gallery-images">
        {/* Contêiner que armazena as imagens e permite o scroll horizontal */}
        <div className="app__gallery-images_container" ref={scrollRef}>
          {/* Mapeia o array de imagens para renderizar cada uma dentro de um cartão */}
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              {/* Ícone do Instagram sobreposto à imagem */}
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        {/* Setas de navegação para o scroll horizontal */}
        <div className="app__gallery-images_arrows">
          {/* Seta para mover o scroll para a esquerda */}
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          {/* Seta para mover o scroll para a direita */}
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default Gallery