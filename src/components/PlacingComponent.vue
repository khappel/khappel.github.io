<template>
    <!--<Panel toggleable>
        <template #header> {{ ShowClass }} </template>-->
        <div class="card">
            <DataTable :value="Placings" stripedRows :class="p-datatable-sm" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <span class="text-base text-900 font-bold">{{ShowClass}}</span>
                        <!---<Button icon="pi pi-refresh" rounded raised />-->
                    </div>
                </template>
                <Column field="placing" header="Placing"></Column>
                <Column field="registrationNumber" header="Registraion"></Column>
                <Column field="horseName" header="Horse"></Column>
                <Column field="sire" header="Sire"></Column>
                <Column field="dam" header="Sire"></Column>
                <Column field="ChampionshipPoints" header="Championship"></Column>
                <Column field="placingPoints" header="Points"></Column>
            </DataTable>
        </div>

    <!--</Panel>-->
</template>

<script>
export default {
    props: {
        ShowClass: String,
        Placings: Array,
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