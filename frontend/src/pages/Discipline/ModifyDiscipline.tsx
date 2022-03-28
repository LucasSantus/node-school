import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FormDiscipline } from '../../components/Form/FormDiscipline';

import Header from '../../components/Header/Header';

export default function ModifyDiscipline(){
    let { id } = useParams();

    return (
        <>
            <Header />
            <Container>
                <FormDiscipline
                    type={"modify"}
                    id={id}
                />
            </Container>
        </>
    );
}