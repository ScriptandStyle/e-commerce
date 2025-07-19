import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../components/Icons';
import '../styles/Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            navigate('/login');
            return;
        }
        setUser(storedUser);
        setFormData(prev => ({
            ...prev,
            name: storedUser.name,
            email: storedUser.email
        }));
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match' });
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                'http://localhost:8000/api/users/profile',
                {
                    name: formData.name,
                    email: formData.email,
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setMessage({ type: 'success', text: 'Profile updated successfully' });
            setIsEditing(false);
            
            // Clear password fields
            setFormData(prev => ({
                ...prev,
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            }));
        } catch (error) {
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || 'Error updating profile' 
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <Icons.User className="avatar-icon" />
                    </div>
                    <h2>{user.name}</h2>
                    {user.isAdmin && <span className="admin-badge">Admin</span>}
                </div>

                {message.text && (
                    <div className={`message ${message.type}`}>
                        {message.type === 'error' ? (
                            <Icons.AlertCircle className="message-icon" />
                        ) : (
                            <Icons.CheckCircle className="message-icon" />
                        )}
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={!isEditing}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                            required
                        />
                    </div>

                    {isEditing && (
                        <>
                            <div className="form-group">
                                <label>Current Password:</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>New Password:</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm New Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}

                    <div className="profile-actions">
                        {!isEditing ? (
                            <button
                                type="button"
                                className="edit-button"
                                onClick={() => setIsEditing(true)}
                            >
                                <Icons.Edit className="button-icon" />
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button type="submit" className="save-button">
                                    <Icons.CheckCircle className="button-icon" />
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setFormData(prev => ({
                                            ...prev,
                                            name: user.name,
                                            email: user.email,
                                            currentPassword: '',
                                            newPassword: '',
                                            confirmPassword: ''
                                        }));
                                    }}
                                >
                                    <Icons.X className="button-icon" />
                                    Cancel
                                </button>
                            </>
                        )}
                        <button
                            type="button"
                            className="logout-button"
                            onClick={handleLogout}
                        >
                            <Icons.LogOut className="button-icon" />
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
