import { Container } from '@mui/material';
import { FormStudent } from '../../components/Form/FormStudent';

import Header from '../../components/Header/Header';

export default function CreateStudent(){
    return (
        <>
            <Header />
            <Container>
                <FormStudent
                    type={"register"}
                />
            </Container>
        </>
    );
}