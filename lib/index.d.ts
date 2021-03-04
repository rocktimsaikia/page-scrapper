declare namespace pageScrapper {
    interface Options {
        /**
         * Only scraps the aboslute links. When set it to false it will pull the relative paths too.
         * @default true 
         */
        readonly absoluteOnly?: boolean
    }

    interface Links {
        links: Array<string>,
        images: Array<string>
    }
}

declare const pageScrapper: {
    /**
     * Pulls out all the links/images of a given site
     * @param url The website URL
     * @returns A object contaning the scrapped links and images
     */
    (url: string, options?: pageScrapper.Options) : Promise<pageScrapper.Links>;

}
export = pageScrapper;