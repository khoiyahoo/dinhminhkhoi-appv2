import { API } from "@/constants/apiRoute";
import { type ISkill } from "@/interfaces/Skills";
import api, { requestHandler, type MappedResponse } from "@/services/configApi";

export const SkillsService = {
  async getSkills(): Promise<MappedResponse<ISkill[]>> {
    const callApi = () => {
      return api.get(API.SKILLS);
    };
    return requestHandler(callApi);
  },
};
