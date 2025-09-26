import TopBackground from '../../components/TopBackground';
import Button from '../../components/Button';
import { Container } from '../../components/GContainer';
import { useNavigate } from 'react-router-dom'
import { Titlelist, ContainerUsers, CardUsers, TrashIcon, AvatarUsers, DeleteMessage } from './styles.js';
import api from '../../services/api.js'
import { useEffect, useState } from 'react';
import Trash from '../../assets/trash.svg'

function ListUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            const { data } = await api.get('/usuarios');
            console.log(data);

            setUsers(data);
        };
        getUsers();
    }, []);

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`);
        setUsers(users.filter(user => user.id !== id));

        
        // Exibir mensagem de sucesso
        setSuccess(true);
        
        // Remover a mensagem após 3 segundos
        setTimeout(() => {
            setSuccess(false);
        }, 3000);

    }

    return (
        <Container>
            <TopBackground />
            <Titlelist> Listagem de Usuários</Titlelist>

        {success && <DeleteMessage>Usuário excluído com sucesso</DeleteMessage>}
            <ContainerUsers>

                {users.map(user =>
                    <CardUsers key={user.id}>
                        <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p> {user.email}</p>
                            <p> {user.age} anos</p>
                        </div>
                        <TrashIcon src={Trash} alt="Trash-Icon" onClick={() => deleteUsers(user.id)} />

                    </CardUsers>
                )}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>

        </Container>
    )
}

export default ListUsers;
