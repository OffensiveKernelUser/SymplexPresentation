import { defineAppSetup } from '@slidev/types';
import Cardinal from '../components/cardinal.vue';

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(Cardinal)
})