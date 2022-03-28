import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FormStudent } from '../../components/Form/FormStudent';

import Header from '../../components/Header/Header';

export default function ModifyStudent(){
    let { id } = useParams();

    return (
        <>
            <Header />
            <Container>
                <FormStudent
                    type={"modify"}
                    id={id}
                />
            </Container>
        </>
    );
}