import axios from "@/config/axios/axios";

export async function saveQuestionnaire(questionnaire) {
    questionnaire['had_antibody_test'] ? questionnaire['had_antibody_test'] = questionnaire['had_antibody_test'] === 'yes' : null;
    questionnaire['had_vaccine'] = questionnaire['had_vaccine'] === 'yes';
    questionnaire['antibodies'] ? questionnaire['antibodies']['number'] = parseInt(questionnaire['antibodies']['number']) : null
    questionnaire['number_of_days_from_office'] = parseInt(questionnaire['number_of_days_from_office']);

    return axios.post("/api/create", questionnaire);
}