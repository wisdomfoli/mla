import {ReactNode, useEffect, useRef} from "react";
import {Fancybox as NativeFancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
    children: ReactNode;
    delegate?: string;
    options?: object;
}

function Fancybox(props: FancyboxProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, [props.delegate, props.options]);

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
