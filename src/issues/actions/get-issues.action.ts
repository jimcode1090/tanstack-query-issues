import {sleep} from "../../helpers";
import {githubApi} from "../../api/github.api.ts";
import {GithubIssue} from "../interfaces";


export const getIssues = async (): Promise<GithubIssue[]> =>{
    await sleep(2000);
    const {data} = await githubApi.get<GithubIssue[]>('/issues');
    return data;
}