import { AppShell, Header } from '@mantine/core';
import { Container } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Table } from '@mantine/core';
import { Divider, Text, Skeleton, Center, Input, Button, Stack, MultiSelect } from '@mantine/core';
import "./App.css";

function App() {



  return (

    <AppShell padding="md">

      <Grid grow gutter="lg" style={{ height: "100%" }}>

        <Grid.Col span={6}>

        </Grid.Col>

        <Grid.Col span={2}>

          <Container style={{ width: '100%', height: '100%', paddingTop: '10%', display: 'flex', flexDirection: 'column'}}>

            <Stack style={{ flex: 1 }}>

              <Input placeholder="Your URL" radius="md" />

              <Divider></Divider>

              <MultiSelect
                data={['React', 'Angular', 'Svelte', 'Vue']}
                placeholder="Pick elements"
                label="Data Fields"
                radius="md"
              />

            </Stack>

            <Button radius="md" style={{marginTop: 'auto', marginBottom: '5%'}}>
              Fetch data
            </Button>

          </Container>






        </Grid.Col>

      </Grid>

    </AppShell>
  );
}

export default App;
