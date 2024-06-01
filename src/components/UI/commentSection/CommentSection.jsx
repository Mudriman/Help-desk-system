import React, { useState } from 'react';
import './commentSection.scss';

const CommentSection = ({ comments, addComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const comment = {
                id: Date.now(),
                author: 'Текущий пользователь', // Или возьмите из контекста авторизации
                text: newComment,
                date: new Date().toLocaleString()
            };
            addComment(comment);
            setNewComment('');
        }
    };

    return (
        <div className="comments-section">
            <h3>Комментарии</h3>
            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <div className="comment-header">
                            <strong>{comment.author}</strong> <span>{comment.date}</span>
                        </div>
                        <div className="comment-body">
                            {comment.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="add-comment">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Добавить комментарий..."
                />
                <button onClick={handleAddComment}>Добавить</button>
            </div>
        </div>
    );
};

export default CommentSection;