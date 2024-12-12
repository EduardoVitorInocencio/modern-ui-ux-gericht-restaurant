import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'; // Importando ícones de play e pause

import { meal } from '../../constants'; // Importando o caminho do vídeo
import './Intro.css'; // Importando os estilos para o componente

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false); // Usando useState para controlar o estado de reprodução do vídeo
  const vidRef = React.useRef(); // Criando uma referência para o elemento de vídeo, para manipulá-lo diretamente

  return (
    <div className="app__video"> {/* Container principal do vídeo */}
      <video
        ref={vidRef} // Referência para o elemento de vídeo
        src={meal} // Caminho do vídeo a ser exibido, vindo de 'constants'
        type="video/mp4" // Tipo de mídia, no caso, vídeo no formato MP4
        loop // Faz com que o vídeo se repita automaticamente
        controls={false} // Desativa os controles padrão do vídeo, como play/pause, volume, etc.
        muted // Mantém o áudio do vídeo mudo por padrão
      />
      <div className="app__video-overlay flex__center"> {/* Overlay que cobre o vídeo */}
        <div
          className="app__video-overlay_circle flex__center" // Botão circular no centro do overlay
          onClick={() => {
            setPlayVideo(!playVideo); // Alterna o estado do vídeo entre play e pause
            if (playVideo) { // Se o vídeo estiver tocando, pausa
              vidRef.current.pause();
            } else { // Se o vídeo estiver pausado, começa a tocar
              vidRef.current.play();
            }
          }}
        >
          {/* Exibe o ícone de play ou pause baseado no estado 'playVideo' */}
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} /> // Ícone de pause
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} /> // Ícone de play
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

