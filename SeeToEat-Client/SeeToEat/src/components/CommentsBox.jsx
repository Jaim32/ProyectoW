// src/components/CommentsBox.jsx

import React, { useState } from 'react';
import Comment from './Comment';
import '../styles/CommentsBox.css';

function CommentsBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Datos quemados para los comentarios de ejemplo
  const exampleComments = [
    { user: "Usuario1", text: "Excelente lugar para comer!" },
    { user: "Usuario2", text: "Muy buena atención y comida deliciosa." },
    { user: "Usuario3", text: "Ambiente agradable y precios justos." },
    { user: "Usuario4", text: "La comida estuvo genial, pero el servicio podría mejorar." },
    { user: "Usuario5", text: "Definitivamente volveré. Recomendado!" },
    { user: "Usuario6", text: "El ambiente es agradable, perfecto para ir en familia." },
    { user: "Usuario7", text: "Las hamburguesas son las mejores!" },
    { user: "Usuario8", text: "Un buen lugar para desconectar y disfrutar de la comida." },
  ];

  const handleAddComment = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewComment('');
  };

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleSubmitComment = () => {
    console.log("Nuevo comentario:", newComment);
    setIsModalOpen(false);
    setNewComment('');
    // Aquí puedes agregar la lógica para actualizar la lista de comentarios
  };

  return (
    <div className="comments-box">
      <h3>Comentarios</h3>
      <div className="comments-list">
        {exampleComments.map((comment, index) => (
          <Comment key={index} user={comment.user} text={comment.text} />
        ))}
      </div>
      <button onClick={handleAddComment} className="add-comment-btn">Añadir Comentario</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Añadir Comentario</h4>
            <textarea 
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Escribe tu comentario aquí..."
              className="comment-input"
            />
            <div className="modal-buttons">
              <button onClick={handleSubmitComment} className="comment-btn">Comentar</button>
              <button onClick={handleCloseModal} className="cancel-btn">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentsBox;