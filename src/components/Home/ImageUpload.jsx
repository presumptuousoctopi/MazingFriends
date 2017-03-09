import React from 'react'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            uploaded: false
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        //console.log('handle uploading-', this.state.imagePreviewUrl);
        this.props.loadImage(this.state.imagePreviewUrl);
        socket.emit("saveImage", {imageUrl: this.state.imagePreviewUrl, user: sessionStorage.getItem('user')});
        this.setState({
            imagePreviewUrl: ''
        });

        this.setState({
            uploaded: true
        });
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="preview" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div>
            {this.state.uploaded ? <h1>New image set!</h1> :
            <div className="previewComponent">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
            }
            </div>
        )
    }
}

export default ImageUpload