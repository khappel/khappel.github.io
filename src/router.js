import { createWebHistory, createRouter } from 'vue-router';
import Results from './components/ResultsView.vue';
import AddResults from './components/ResultsAddView.vue';
import test from './components/TheWelcome.vue';
import ShowResults from './components/ShowResultView.vue';
import ExhibitorResults from './components/ExhibitorResultView.vue';
import HorseResults from './components/HorseResultView.vue';

const routes = [
    { path: "/resultsview", name:Results, component: Results, alias: "/", 
    children: [
      { path: "/showresultsview", name:ShowResults, component: ShowResults, alias: "/" },
      { path: "/exhibitorresultsview", name:ExhibitorResults, component: ExhibitorResults },
      { path: "/horseresultsview", name:HorseResults, component: HorseResults },
    ]},
    { path: "/addview", name:AddResults, component: AddResults },
    { path: "/test", name:test, component: test},
    
  ];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;