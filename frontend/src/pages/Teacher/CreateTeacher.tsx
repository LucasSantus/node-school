import { Container } from '@mui/material';
import { FormTeacher } from '../../components/Form/FormTeacher';

import Header from '../../components/Header/Header';

export default function CreateTeacher(){
    return (
        <>
            <Header />
            <Container>
                <FormTeacher
                    type={"register"}
                />
            </Container>
        </>
    );
}