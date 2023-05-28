<template>
    <Card>
        <!--<template #title>{{ ShowClass }}</template>-->

        <template #content>
            <!--<form @submit.prevent="handleSubmit" class="placing-form">-->

            <table width="100%">
                <thead>
                    <tr>
                        <th>Placing</th>
                        <th>Registration Number</th>
                        <th>Horse</th>
                        <th>Sire</th>
                        <th>Dam</th>
                        <th>Championship Points</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="placing in Placings" :key="placing">
                        <td>
                            {{ placing.placing }}
                        </td>
                        <td>
                            <InputText type="text" id="registrationNumber" v-model="placing.registrationNumber"
                                class="p-inputtext-sm" required />
                        </td>
                        <td>
                            <InputText type="text" id="horseName" v-model="placing.horseName" class="p-inputtext-sm"
                                required />
                        </td>
                        <td>
                            <InputText type="text" id="sire" v-model="placing.sire" class="p-inputtext-sm" required />
                        </td>
                        <td>
                            <InputText type="text" id="dam" v-model="placing.dam" class="p-inputtext-sm" required />
                        </td>
                        <td>
                            <InputText type="text" id="ChampionshipPoints" v-model="placing.ChampionshipPoints"
                                class="p-inputtext-sm" required />
                        </td>
                        <td>
                            {{ placing.placingPoints }}
                        </td>
                    </tr>


                </tbody>
            </table>
            <!--</form>-->
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
        </template>
    </Card>
</template>

<script>
export default {
    props: {
        ShowClass: String,
        Placings: Array,
    },
    data() {
        return {
            Placings: [
                {
                    "placing": 1,
                    "registrationNumber": "",
                    "horseName": "",
                    "owner": "",
                    "sire": "",
                    "dam": "",
                    "ChampionshipPoints": "",
                    "placingPoints": 10
                },
                {
                    "placing": 2,
                    "registrationNumber": "",
                    "horseName": "",
                    "owner": "",
                    "sire": "",
                    "dam": "",
                    "ChampionshipPoints": "",
                    "placingPoints": 7
                },
                {
                    "placing": 3,
                    "registrationNumber": "",
                    "horseName": "",
                    "owner": "",
                    "sire": "",
                    "dam": "",
                    "ChampionshipPoints": "",
                    "placingPoints": 5
                },
                {
                    "placing": 4,
                    "registrationNumber": "",
                    "horseName": "",
                    "owner": "",
                    "sire": "",
                    "dam": "",
                    "ChampionshipPoints": "",
                    "placingPoints": 3
                },
                {
                    "placing": 5,
                    "registrationNumber": "",
                    "horseName": "",
                    "owner": "",
                    "sire": "",
                    "dam": "",
                    "ChampionshipPoints": "",
                    "placingPoints": 1
                }
            ],
        }
    }

}
</script>

<!-- 
    "placings": [
                    {
                        "placing": 1,
                        "registrationNumber": "S7000",
                        "horseName": "T-Rex",
                        "owner": "smith, sam",
                        "sire": "tt",
                        "dam": "ff",
                        "ChampionshipPoints": 6,
                        "placingPoints": 10
                    }]
-->