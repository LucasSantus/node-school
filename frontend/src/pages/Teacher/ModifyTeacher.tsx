import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FormTeacher } from '../../components/Form/FormTeacher';

import Header from '../../components/Header/Header';

export default function ModifyTeacher(){
    let { id } = useParams();

    return (
        <>
            <Header />
            <Container>
                <FormTeacher
                    type={"modify"}
                    id={id}
                />
            </Container>
        </>
    );
}
