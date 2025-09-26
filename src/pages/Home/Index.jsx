import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js';

import { Title, Form, ContainerInputs, Input, InputLabel, SuccessMessage } from './styles.js';
import Button from '../../components/Button';
import ResetButton from '../../components/ButtonReset';
import TopBackground from '../../components/TopBackground/index.jsx';
import { Container } from '../../components/GContainer';

function Home() {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false); // Estado para controlar erros
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const navigate = useNavigate();

  async function registerNewUser() {
    setLoading(true); // Inicia o carregamento
    setError(false); // Reseta o estado de erro

    try {
      const data = await api.post('/usuarios', {
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value),
        email: emailRef.current.value
      });
      console.log(data);
      setSuccess(true);
      if (nameRef.current) nameRef.current.value = '';
      if (ageRef.current) ageRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Erro ao cadastrar usuário:', err);
      setError(true); // Define o estado de erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={nameRef} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={ageRef} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={emailRef} />
        </div>

        {success && <SuccessMessage>Usuário cadastrado com sucesso</SuccessMessage>}
        {error && <SuccessMessage style={{ color: 'red' }}>Erro ao cadastrar usuário</SuccessMessage>} {/* Mensagem de erro */}

        <Button type="button" onClick={registerNewUser} theme="primary" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar Usuário'}
        </Button>
        
        <ResetButton onClick={() => {
          if (nameRef.current) nameRef.current.value = '';
          if (ageRef.current) ageRef.current.value = '';
          if (emailRef.current) emailRef.current.value = '';
        }} />

      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>

    </Container>
  );
}

export default Home;