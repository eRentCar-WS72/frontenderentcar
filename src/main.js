import { createApp } from "vue";
import { createPinia } from "pinia";
import PiniaPluginPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import PrimeVue from "primevue/config";

// PrimeVue Styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// PrimeFlex Companion
import "primeflex/primeflex.css";

import SpeedDial from "primevue/speeddial";
import Tooltip from "primevue/tooltip";
import Badge from "primevue/badge";
import Panel from "primevue/panel";
import MultiSelect from "primevue/multiselect";
import Fieldset from "primevue/fieldset";
import Textarea from "primevue/textarea";
import Steps from "primevue/steps";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Image from "primevue/image";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Password from "primevue/password";
import Divider from "primevue/divider";
import InputMask from "primevue/inputmask";
import Calendar from "primevue/calendar";
import AutoComplete from "primevue/autocomplete";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Menu from "primevue/menu";
import SplitButton from "primevue/splitbutton";
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Inplace from 'primevue/inplace';
import CascadeSelect from 'primevue/cascadeselect';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from "primevue/toastservice";
import { loadFonts } from "@/plugins/webfontloader";

loadFonts();

const app = createApp(App);
const pinia = createPinia();
pinia.use(PiniaPluginPersistedState);
app.config.devtools = true;
app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(ConfirmationService);
app.directive("tooltip", Tooltip);

// PrimeVue Services
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

// PrimeVue Components
app.component("pv-menu", Menu);
app.component("pv-split-button", SplitButton);
app.component("pv-speed-dial", SpeedDial);
app.component("pv-badge", Badge);
app.component("pv-panel", Panel);
app.component("pv-multi-select", MultiSelect);
app.component("pv-field", Fieldset);
app.component("pv-data-table", DataTable);
app.component("pv-steps", Steps);
app.component("pv-text-area", Textarea);
app.component("pv-checkbox", Checkbox);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-sidebar", Sidebar);
app.component("pv-row", Row);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);
app.component("pv-img", Image);
app.component("pv-data-view", DataView);
app.component("pv-rating", Rating);
app.component("pv-password", Password);
app.component("pv-divider", Divider);
app.component("pv-input-mask", InputMask);
app.component("pv-calendar", Calendar);
app.component("pv-autocomplete", AutoComplete);
app.component("pv-chip", Chip);
app.component("pv-upload", FileUpload);
app.component("pv-data-view-layout-options", DataViewLayoutOptions);
app.component("pv-avatar", Avatar);
app.component("pv-avatar-group", AvatarGroup);
app.component("pv-inplace", Inplace);
app.component("pv-cascade", CascadeSelect);
app.component("pv-confirm-dialog", ConfirmDialog);

app.mount("#app");
