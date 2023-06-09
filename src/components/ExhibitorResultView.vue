<template>
    <DataTable v-model:expandedRows="expandedRows" :value="Array.from(ownerData.values())" stripedRows
        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" dataKey="owner" :class="p - datatable - sm"
        tableStyle="min-width: 50rem">

        <Column expander style="width: 5rem" />        
        <Column field="owner" header="Owner"></Column>        
        <template #expansion="slotProps">
            <div class="p-3">
                <DataTable :value="slotProps.data.shows">
                    <Column field="show" header="Show" sortable></Column>
                    <Column field="horseCount" header="HorseCount" sortable></Column>
                    <Column field="class" header="Class" sortable></Column>
                    <Column field="registrationNumber" header="Registraion"></Column>
                    <Column field="horseName" header="Horse"></Column>
                    <Column field="sire" header="Sire"></Column>
                    <Column field="dam" header="Dam"></Column>            
                    <Column field="championshipPoints" header="Championship Points" sortable></Column>
                    <Column field="placingPoints" header="Placing Points" sortable></Column>
                    <!-- <Column field="pointsTotal" header="Points" sortable>
                                   <template #body="slotProps">
                                       <Tag :value="slotProps.data.status.toLowerCase()"
                                           :severity="getOrderSeverity(slotProps.data)" />
                                   </template>
                               </Column>
                               -->
                </DataTable>
            </div>
        </template>
    </DataTable>
</template>

<script>

import { showViewData } from '../classess/showResults.js'

export default {
    name: "Results",
    data() {
        return {
            defaultFileSelected: {
                year: "2023-2024",
                file: "Placings/2023BelgianMeritPlacings.json"
            },
            ownerData: [],
            accordianCount: [],
            expandedRows: []
        };
    },
    components: {
    },
    methods: {

        getOwnerData() {
            fetch(this.defaultFileSelected.file)
                .then(response => response.json())
                .then(data => (                    
                    this.ownerData = new showViewData(data).ReturnOwnerResults()                    
                ))
        },
        setAccordianCount(length) {
            let arr = [];
            for (let i = 0; i < length; i++) {
                arr.push(i);
            }

            return arr;
        }
    },
    created: function () {
        this.getOwnerData();
    }
};
</script>