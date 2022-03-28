import { Container } from '@mui/material';
import { FormDiscipline } from '../../components/Form/FormDiscipline';

import Header from '../../components/Header/Header';

export default function CreateDiscipline(){
    return (
        <>
            <Header />
            <Container>
                <FormDiscipline
                    type={"register"}
                />
            </Container>
        </>
    );
}