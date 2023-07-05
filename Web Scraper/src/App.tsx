import { AppShell, Header } from '@mantine/core';
import { Container } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Table } from '@mantine/core';
import { Divider, Text, Skeleton, Center, Input, Button, Stack, MultiSelect, Pagination, Space, FileButton } from '@mantine/core';
import "./App.css";
import SkeletonTable from './SkeletonTable';

function App() {

  return (

    <AppShell padding="md">

      <Grid grow gutter="lg" style={{ height: "100%" }}>

        <Grid.Col span={6}>

          <Container style={{ width: '100%', height: '100%', paddingTop: '5%', display: 'flex', flexDirection: 'column' }}>

            <Container style={{ flex: 1, width: '100%' }}>

              <SkeletonTable></SkeletonTable>
              <Space h="xs" />
              <Pagination total={2} radius="md" size="xs" disabled position='right' />
              <Space h="xl" />
              <Space h="xl" />
              <Divider></Divider>

            </Container>

            <Container style={{ width: '100%', marginTop: 'auto', marginBottom: '2.4%' }}>
              <Button disabled radius="md">
                Download data
              </Button>
            </Container>


          </Container>

        </Grid.Col>

        <Grid.Col span={2}>

          <Container style={{ width: '100%', height: '100%', paddingTop: '10%', display: 'flex', flexDirection: 'column' }}>

            <Stack style={{ flex: 1 }}>

              <Input placeholder="Your URL" radius="md" required />

              <Divider></Divider>

              <MultiSelect
                data={['React', 'Angular', 'Svelte', 'Vue']}
                placeholder="Pick elements"
                label="Data Fields"
                radius="md"
                disabled
              />

            </Stack>

            <Button disabled radius="md" style={{ marginTop: 'auto', marginBottom: '5%' }}>
              Fetch data
            </Button>

          </Container>






        </Grid.Col>

      </Grid>

    </AppShell>
  );
}

export default App;
