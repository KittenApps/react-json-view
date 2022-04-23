import { createRoot } from 'react-dom/client';
import Index from './index';

require('./../style/scss/global.scss');

const app = document.getElementById('mac-react-container');

//app entrypoint
createRoot(app).render(
    <div class="app-entry">
        <Index />
    </div>
);
