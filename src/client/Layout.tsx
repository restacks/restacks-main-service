import * as React from 'react';

type LayoutProps = {

}
export default class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}