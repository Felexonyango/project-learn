import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "searchFilter",
})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (!value) return null;
        if (!args) return value;

        args = args.toLowerCase();

        return value.filter((data: any) =>
            JSON.stringify(data).toLowerCase().includes(args)
        );
    }

    transforms(value: string): string {
        let first = value.substr(0, 1).toUpperCase();
        return first + value.substr(1);
    }
}
