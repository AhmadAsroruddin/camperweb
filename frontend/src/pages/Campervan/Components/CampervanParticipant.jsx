import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@mui/material';

const ContactList = () => {
    const { tripId } = useParams();
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            const token = localStorage.getItem('token'); // Ambil token dari localStorage
            if (!token) {
                setError('No token found');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://10.10.102.98:8080/api/order/participant/${tripId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Tambahkan token ke header
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch participants');
                }

                const result = await response.json();
                if (result.statusCode === 200) {
                    setContacts(result.data); // Akses data partisipan dari response
                } else {
                    throw new Error(result.message || 'Failed to fetch participants');
                }
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchContacts();
    }, [tripId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', marginTop: 50 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Participant List
            </Typography>
            <List>
                {contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <div key={index}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary={contact.participantName} secondary={contact.contact} />
                            </ListItem>
                            {index < contacts.length - 1 && <Divider variant="inset" component="li" />}
                        </div>
                    ))
                ) : (
                    <Typography variant="body1" align="center" gutterBottom>
                        No participants found.
                    </Typography>
                )}
            </List>
        </div>
    );
};

export default ContactList;
