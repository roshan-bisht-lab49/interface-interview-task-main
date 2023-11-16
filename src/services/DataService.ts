import transactions from "../../transactions.json";
import { TableData } from "./types";

//NOTE: A Separate Service layer which can have a list of common module API's together to get data for client.
export async function getTableData(): Promise<TableData[]> {
  return transactions;
}
