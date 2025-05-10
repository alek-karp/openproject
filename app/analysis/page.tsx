import { Field, Label } from '@/components/catalyst/fieldset';
import { Input } from '@/components/catalyst/input';
import { Button } from '@/components/catalyst/button';

const Analysis = () => (
  <div>
    <Field>
      <Label>Serach for idea</Label>
      <Input name='full_name' />
    </Field>
    <Button>Search</Button>
  </div>
);

export default Analysis;
