import {sleep} from "../../helpers";
import {githubApi} from "../../api/github.api.ts";
import {GithubLabel} from "../interfaces";


export const getLabels = async (): Promise<GithubLabel[]> => {

    await sleep(2000);
    const {data} = await githubApi.get<GithubLabel[]>('/labels');
    return data;

}